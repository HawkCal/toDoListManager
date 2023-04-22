import { useNavigate } from 'react-router-dom';
import '../styles/ListCardStyle.css';

export default function ListCard({ data }) {
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`lists/${id}`);
  }

  return (
    <li className='listCard' onClick={() => handleClick(data.id)}>
      <h3>{data.title}</h3>
    </li>
  );
}