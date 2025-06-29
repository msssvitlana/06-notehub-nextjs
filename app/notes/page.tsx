// import { QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchNotes } from '../../lib/api';
import NotesClient from './Notes.client';

// export default async function NotesPage() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['Notes', '', 1],
//     queryFn: () => fetchNotes('', 1),
//   });

//   return (
//     <NotesClient dehydratedState={dehydrate(queryClient)} />
//   );
// }

 const NotesPage = async () => {
   const notesData = await fetchNotes('', 1)
   return (
       <NotesClient notesData={notesData} />
  
   )
}
export default NotesPage;