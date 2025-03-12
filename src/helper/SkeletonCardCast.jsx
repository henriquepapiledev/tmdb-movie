import styles from '../helper/SkeletonCard.module.css';

const SkeletonCardCast = () => {
  return (
    <div className="basis-48 grow-[0] shrink-[0]">
      <div className="flex flex-col justify-between bg-white h-full w-48 p-2 rounded-md shadow-md">
        <div className={`${styles.skeleton} h-56 rounded-md`}></div>
        <div className="flex flex-col">
          <div
            className={`${styles.skeleton} h-5 rounded-full mt-2 mb-2`}
          ></div>
          <div className={`${styles.skeleton} h-5 rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardCast;
