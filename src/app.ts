import defaultSettings from '../config/defaultSettings';
import 'bootstrap/dist/css/bootstrap.min.css';
export async function getInitialState(){
  return {
    settings: defaultSettings,
    projectId: '1747727677',
    language: 'en-US',
  };
}
