import  {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dropzone from 'react-dropzone';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { FaCloudUploadAlt } from "react-icons/fa";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NewPost({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState(null);
  const handleSubmit = () => {

  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className='w-[100%]'
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex flex-col gap-2'>
            <TextField
              defaultValue="Tiitle"
              className=''
            />
            <TextField
              defaultValue="Description"
            />
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setImage(acceptedFiles[0].name)
              }
            >
              {
                ({ getRootProps, getInputProps }) => {
                  console.log(image)
                  return (

                    <Box {...getRootProps()}
                      border={`2px dashed white`}
                      p="1rem"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <input {...getInputProps()} />
                      {!image ? (
                        <p className='text-3xl text-white flex justify-center items-center'><FaCloudUploadAlt /></p>
                      ) : (
                        <div className='flex justify-between items-center text-white'>
                          <Typography>{image}</Typography>
                          <EditOutlinedIcon />
                        </div>
                      )}
                    </Box>

                  )
                }
              }
            </Dropzone>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Post
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

/*
  <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
*/
