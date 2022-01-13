import { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  capitalize,
  CardHeader,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import swapiService, { Result } from '../services/SwapiService'
import { Link } from 'react-router-dom'
import { getImgUrl, getPageUrl, getTitle, SW_IMAGES_URL } from '../tools'
import { useErrorHandler } from 'react-error-boundary'

type RelatedProps = {
  name: string
  urls: string[]
}

export default function Related({ name, urls }: RelatedProps) {
  const [related, setRelated] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)
  const handleError = useErrorHandler()

  useEffect(() => {
    setLoading(true)
    const getResourses = async () => {
      try {
        const results = await swapiService.getResoursesByUrls(urls)
        if (name === 'films') {
          const sortedFilms = results.sort((filmA: Result, filmB: Result) => {
            return (filmA.episode_id as number) - (filmB.episode_id as number)
          })
          setRelated(sortedFilms)
        } else {
          setRelated(results)
        }
      } catch (error) {
        handleError(error)
      } finally {
        setLoading(false)
      }
    }
    getResourses()
  }, [urls])

  return (
    <Card variant="outlined">
      <CardHeader title={`Related ${capitalize(name)}`} />
      {!loading && (
        <CardContent>
          {related.length > 0 && (
            <List
              dense
              sx={{
                width: '100%',
                maxWidth: 360,
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 }
              }}
            >
              {related.map((item: Result, index: number) => (
                <ListItem key={index} button component={Link} to={`${getPageUrl(item.url)}`}>
                  <ListItemAvatar>
                    <Avatar
                      src={getImgUrl(item.url)}
                      alt=" "
                      sx={{
                        backgroundImage: `url(${SW_IMAGES_URL}/placeholder-small.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={getTitle(item)} />
                </ListItem>
              ))}
            </List>
          )}
          {related.length === 0 && <div>{`No related ${name} found.`}</div>}
        </CardContent>
      )}
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center" p={2}>
          <CircularProgress color="inherit" />
        </Box>
      )}
    </Card>
  )
}
