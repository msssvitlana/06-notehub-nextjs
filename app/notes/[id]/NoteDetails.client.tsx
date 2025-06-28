"use client";

import css from './NoteDetails.module.css';
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../../../lib/api";

interface Props {
  id: string;
}
const NoteDetailsClient = ({ id }: Props) => {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  const formattedDate = note.updatedAt
    ? `Оновлено: ${new Date(note.updatedAt).toLocaleString()}`
    : `Створено: ${new Date(note.createdAt).toLocaleString()}`;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button className={css.editBtn}>Редагувати</button>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{formattedDate}</p>
      </div>
    </div>
  );
};

export default NoteDetailsClient;

