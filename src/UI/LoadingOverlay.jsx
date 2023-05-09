import { RotatingLines } from "react-loader-spinner";

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[rgba(0,0,0,.8)] bg-opacity-50  flex flex-col items-center justify-center">
      <RotatingLines
        strokeColor="#febd69"
        strokeWidth="4"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </div>
  );
}

export default LoadingOverlay;