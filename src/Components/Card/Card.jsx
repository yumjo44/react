import CardImg from "../../assets/illustration-article.svg";
import Badge from "../Badge/Badge";
import authorImg from "../../assets/image-avatar.webp";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.Card}>
      <img className={styles.CardImg} src={CardImg} />
      <div>
        {" "}
        <Badge> Learning</Badge>
      </div>
      <p> published 21 Dec 2023</p>
      <h1> HTML & CSS Foundation</h1>
      <p classname={styles.Discription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro dolore,
        similique, ab,
      </p>
      <div classname={styles.Author}>
        <img src={authorImg} width="30" hright="30" />
        <p>Greg Hopper</p>
      </div>
    </div>
  );
};
export default Card;
