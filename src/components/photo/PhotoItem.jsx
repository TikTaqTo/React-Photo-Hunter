import React from "react";
import styles from "./PhotoItem.module.css";

const PhotoItem = (props) => {
    const { item } = props;

    console.log(item);

    return (
        <div className={styles.card}>
            <img
              className={styles.card_image}
              alt={item.alt_description}
              src={item.urls.regular}
            ></img>
            <div className={styles.card_info}>
              <div className={styles.card_info__profile}>
                <div className={styles.info_profile__photo}>
                  <img src={item.user.profile_image.medium} alt="" />
                </div>
                <div className={styles.info_profile__info}>
                  <h5 className={styles.info_profile__name}>{item.user.name}</h5>
                  <a href={"https://instagram.com/"+item.user.social.instagram_username}>@{item.user.social.instagram_username}</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default PhotoItem;