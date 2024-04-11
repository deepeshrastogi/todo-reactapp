import style from "../css/style.module.css";
export default function footer() {
  return (
    <>
      <div className={style.footer_menu}>
        Developed & Maintained by &nbsp;
        <a href="https://www.linkedin.com/in/deepesh-rastogi" target="_blank">
          Deepesh Rastogi
        </a>
      </div>
    </>
  );
}
