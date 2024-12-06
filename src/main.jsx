import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"naidu","emailId":"pidugubunny534@gmail.com","phoneNo":"2345321235","projects":[{"title":"naidu","description":"naidu","technologies":["React","C++"],"repoLink":"nice","_id":"6752eb04024eb4a3b9092b97"},{"title":"naidu","description":"naidu","technologies":["React"],"repoLink":"naidu","_id":"6752eb04024eb4a3b9092b98"}],"resume":"","experiences":[{"companyName":"naidu","role":"naidunaidu","description":"naidu","technologiesUsed":[],"duration":"naidu","_id":"6752eb04024eb4a3b9092b99"}],"techStacks":[],"contactDetails":[],"codingProfiles":[],"certifications":[],"achievements":[{"title":"naidu","description":"naidu","_id":"6752eb04024eb4a3b9092b9a"}],"about":"naidu","profilePhoto":"","_id":"6752eb04024eb4a3b9092b96","createdAt":"2024-12-06T12:16:04.855Z","updatedAt":"2024-12-06T12:16:04.855Z","__v":0}} />
  </StrictMode>,
)
