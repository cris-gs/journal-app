import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import SaveOutlined from "@mui/icons-material/SaveOutlined"
import TextField from "@mui/material/TextField"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid
        className='animate__animated animate__fadeIn animate__faster' 
        container 
        direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} >

        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >January 28, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Enter a title"
                label="Title"
                sx={{ border: 'none', mb: 1 }}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happent today?"
                minRows={ 5 }
                sx={{ border: 'none', mb: 1 }}
            />
        </Grid>

        <ImageGallery/>


    </Grid>
  )
}
