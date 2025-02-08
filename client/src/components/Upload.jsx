import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Authentication request failed: ${response.status} - ${errorText}`
      );
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    console.log("Authenticator response:", { signature, expire, token });
    return { signature, expire, token };
  } catch (error) {
    console.error(`Authentication request failed: ${error.message}`);
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  return (
    <>
      <IKContext
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        authenticator={authenticator}
      >
        <IKUpload
          useUniqueFileName={true}
          onError={(error) => {
            console.error("Image upload failed:", error);
            toast.error("Image upload failed. Please try again.");
          }}
          onSuccess={(response) => {
            console.log("Image uploaded successfully:", response);
            toast.success("Image uploaded successfully!");
            setData(response);
          }}
          onUploadProgress={(progress) => {
            console.log("Image upload progress:", progress);
            setProgress(Math.round((progress.loaded / progress.total) * 100));
          }}
          className="hidden"
          ref={ref}
          accept={`${type}/*`}
        />
        <div className="cursor-pointer" onClick={() => ref.current.click()}>
          {children}
        </div>
      </IKContext>
    </>
  );
};

export default Upload;
