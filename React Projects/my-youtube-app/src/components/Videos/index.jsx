const Video = (props) => {
  return (
    <div className="thumbnail-row">
      <img className="thumbnail" src={ require('../../images/books.jpg').default } alt="Not Working" />
      <div className="video-time">{props.duration}</div>
    </div>
  );
};

export default Video;