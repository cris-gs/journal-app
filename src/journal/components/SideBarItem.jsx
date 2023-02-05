import { useMemo } from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import TurnedInNot from '@mui/icons-material/TurnedInNot'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'

export const SideBarItem = ({ title = '', body, id }) => {

    const newTitle = useMemo(() => { 
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [ title ])

  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
