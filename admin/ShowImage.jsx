const ShowImage = ({ property, record, view = "default" }) => {
  let image = record?.params?.[property.name];

  const styles = property.custom?.styles?.[view] || {
    height: 60,
    width: 60,
    borderRadius: '100%',
  };

  if (image && !image.startsWith('http')) {
    image = '/' + image;
  }

  if (!image) return <div>--</div>;

  return (
    <div>
      <img style={styles} src={image} alt="Image" />
    </div>
  );
};

export default ShowImage;
