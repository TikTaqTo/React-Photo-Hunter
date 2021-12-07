import React from "react";
import PhotoItem from "../photo/PhotoItem"
import styles from "./PhotosList.module.css";
import '../../App.css';


const PhotosList = ({AllPhotos}) => {
    return (
        <div className="container">
            <div className={styles.all_card_list}>
            <div className={styles.card_list}>
            {!!AllPhotos
              && AllPhotos.map((item, index) => {
                if (index % 3 === 1 || index === 1) {
                  return <PhotoItem item={item} key={index} />;
                }
                return '';
              })}
            </div>
            <div className={styles.card_list}>
            {!!AllPhotos
              && AllPhotos.map((item, index) => {
                if (index % 3 === 2 || index === 2) {
                  return <PhotoItem item={item} key={index} />;
                }
                return '';
              })}
            </div>
            <div className={styles.card_list}>
            {!!AllPhotos
              && AllPhotos.map((item, index) => {
                if (index % 3 === 0) {
                  return <PhotoItem item={item} key={index} />;
                }
                return '';
              })}
            </div>
        </div>
        </div>
    )
}

export default PhotosList;