import { Rate } from 'antd';
import 'antd/dist/antd.css';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({ rating ,setRating,movieRating,ismovieRating }) => {
  const handlechange=value=>{
    setRating(value);
  };


  return (
    ismovieRating
    ?
    <span>
      <Rate disabled value={movieRating} />
      
    </span>
    :
    <span>
      <Rate tooltips={desc} onChange={handlechange} value={rating} />
      
    </span>
  );
};

export default Rating;