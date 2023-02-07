import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import TurnedInNot from '@mui/icons-material/TurnedInNot'
import Grid from '@mui/material/Grid'
import ListItemText from '@mui/material/ListItemText'

import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();
    
    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) );
    }

    const newTitle = useMemo(() => { 
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    }, [ title ])


  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote } >
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
