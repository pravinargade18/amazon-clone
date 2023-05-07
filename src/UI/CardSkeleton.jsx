import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((item,index) => (
          <div key={index} className=" bg-white  border-[#ccc] py-8 z-30 relative cursor-pointer flex flex-col gap-4 rounded-md">
            {/* <span className="absolute top-2 right-2">
        <Skeleton square width={70} height={30} />
      </span> */}
            <div className=" flex items-center mt-2 justify-center relative group">
              <Skeleton square width={280} height={200} />
            </div>
            <div className="px-4  z-20">
              <div className="flex items-center px-3 justify-between">
                <h2>
                  <Skeleton square width={120} height={20} />
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  <Skeleton circle width={30} height={30} />
                </p>
              </div>
              <div className=" px-3 py-1.5 ">
                <Skeleton square width={280} height={15} />
                <Skeleton square width={280} height={15} />
                <Skeleton square width={280} height={15} />
              </div>
              <button className=" px-3 py-1.5 ">
                <Skeleton square width={280} height={35} />
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default CardSkeleton;