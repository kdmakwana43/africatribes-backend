import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Text, Label, Button } from "@adminjs/design-system";
import HttpPostRequest from "./HttpPostRequest";

const ImageUploader = (props) => {
  const { onChange, property, record } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("Image uploading... Please do not save until the image is uploaded.");
  const [previewUrl, setPreviewUrl] = useState(null);

  // Initialize preview when editing existing data
  useEffect(() => {
    if (record?.params?.[property.name] && !previewUrl) {
      console.log(property.name);
      setPreviewUrl(record.params[property.name]);
    }
  }, [record, property.name, previewUrl]);

  const onDrop = useCallback(
    (files) => {
      if (files.length) {
        const file = files[0];
        const formData = new FormData();
        formData.append("file", file);

        setIsLoading(true);
        setMsg("Image uploading... Please do not save until the image is uploaded.");

        HttpPostRequest("/upload-file", formData)
          .then((res) => {
            setIsLoading(false);
            setMsg("Image uploaded successfully.");
            setPreviewUrl(res); // Assuming the response is the image URL
            onChange({
              ...record,
              params: {
                ...record.params,
                [property.name]: res,
              },
            });
          })
          .catch(() => {
            setIsLoading(false);
            setMsg("Upload failed. Try again.");
          });
      }
    },
    [onChange, property.name, record]
  );

  const onRemove = () => {
    setPreviewUrl(null);
    onChange({
      ...record,
      params: {
        ...record.params,
        [property.name]: null,
      },
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    multiple: false,
  });

  return (
    <>
      <Text
        style={{
          display: "block",
          fontFamily: "Roboto, sansSerif",
          fontSize: "12px",
          lineHeight: "16px",
          marginBottom: "8px",
          fontWeight: "400",
        }}
      >
        Profile
      </Text>

      {previewUrl ? (
        <div
          style={{
            position: "relative",
            border: "2px dashed #ccc",
            padding: "10px",
            textAlign: "center",
            marginBottom: "20px",
            borderRadius: "6px",
          }}
        >
          <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "6px" }} />
          <Button
            variant="danger"
            size="sm"
            onClick={onRemove}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              padding: "0",
              fontSize: "16px",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            ×
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{
            border: "2px dashed #666",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            marginBottom: "40px",
            borderRadius: "6px",
          }}
        >
          <input {...getInputProps()} />
          {isLoading && <Label style={{ color: "blue" }}>{msg}</Label>}
          {isDragActive ? <p>Drop the image here ...</p> : <p>Drag and drop a JPG or PNG, or click to select</p>}
        </div>
      )}
    </>
  );
};

export default ImageUploader;
