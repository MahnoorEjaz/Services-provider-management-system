import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Loading from "react-loading";


const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

let DescriptionData = '';


const App = ({ toggleDiscrestion }) => {
  const [value, setValue] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [ErrorContent, setErrorContent] = useState('');
  const handleCloseSnackbar = () => {
    setMessageSent(false);
  }

  const SaveData = () => {
    DescriptionData = value;
    if (value === '') {
      setMessageSent(true);
      setErrorContent('Please Enter the Description')
    }
    else {
      if (DescriptionData.length > 10000) {
        setMessageSent(true);
        console.log(DescriptionData);
        setErrorContent('Please Enter the Description less than 1400 characters');
        return;
      }  
      else {
        setLoading(true);
        setMessageSent(false);
        console.log(DescriptionData);
        DescriptionData = value;
        setTimeout(() => {
          setLoading(false);
          toggleDiscrestion();
        }, 1000);
      }
    }
  }
  return (
    <>
      <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="The content starts here..." />;
      <Snackbar open={isMessageSent} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
        <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
          {ErrorContent}
        </MuiAlert>
      </Snackbar>  
      <div style={{ marginLeft: '500px' }}>
        <input
          type='submit'
          value='Save'
          onClick={SaveData}
          style={{
            backgroundColor: 'rgba(29, 191, 115, 1)',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            float: 'right',
            width: '150px',
            height: '50px',
            padding: '10px 20px',
            fontSize: '20px', // Adjust the font size as needed
          }}
        />
      </div>
      {isLoading && <Loading type="spin" color="rgba(29, 191, 115, 1)" height={50} width={50}
      />}

    </>
  );
};


export { DescriptionData };
export default App;

