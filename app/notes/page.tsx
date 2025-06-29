import { fetchNotes } from '../../lib/api';
import NotesClient from './Notes.client';


 const NotesPage = async () => {
   const notesData = await fetchNotes('', 1)
   return (
       <NotesClient notesData={notesData} />
  
   )
}
export default NotesPage;