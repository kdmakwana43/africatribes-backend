const ShowImage = ({ property, record, view = "list" }) => {
  let image = record?.params?.[property.name];


  if(window.location.href.match('/show')){
    view = 'show'
  }

  const styles = property.custom?.styles?.[view] || {
    height: 60,
    width: 60,
    borderRadius: '100%',
    objectFit : 'cover'
  };

  if (image && !image.startsWith('http')) {
    // image = '/' + image;
  }

  if (!image) return <div>--</div>;

  return (
    <div>
      <img style={styles} src={image} alt="Image" />
    </div>
  );
};

export default ShowImage;
