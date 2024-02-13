import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue } from '../interfaces';
import { State } from '../interfaces/issue';
import { useNavigate } from 'react-router-dom';

interface IssueItemProps {
  issue: Issue;
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  const { title, number, user, comments, state } = issue;
  const { login, avatar_url } = user;

  const navigate = useNavigate();

  return (
    <div className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${number}`)}
    >
      <div className="card-body d-flex align-items-center">

        {
          state === State.Open
            ? <FiInfo size={30} color="red" />
            : <FiCheckCircle size={30} color="green" />
        }

        <div className="d-flex flex-column flex-fill px-2">
          <span>{title}</span>
          <span className="issue-subinfo">{`#${number} opened 2 days ago by `}<span className='fw-bold'>{login}</span></span>
        </div>

        <div className='d-flex align-items-center'>
          <img src={avatar_url} alt="User Avatar" className="avatar" />
          <span className='px-2'>{comments}</span>
          <FiMessageSquare />
        </div>

      </div>
    </div>
  )
}
