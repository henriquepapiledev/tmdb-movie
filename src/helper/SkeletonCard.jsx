import image from '../assets/no-image.jpg';
import styles from '../helper/SkeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className={`${styles.skeleton} aspect-image rounded-md`}></div>
      <div className="flex flex-col">
        <div className={`${styles.skeleton} h-5 rounded-full mt-2 mb-2`}></div>
        <div className={`${styles.skeleton} h-5 rounded-full`}></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
