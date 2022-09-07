export default function Tech(props) {
  const { data, title, path, position, id } = props;
  return (
    <div className={`tech ${position} ${`c-${id}`}`}>
      <div className={`tech_content`}>
        <h4 className={`tech_content_title`}>{title}</h4>
        <p className={`tech_content_text`}>{data}</p>
      </div>
      <div className={`tech_preview`}>
        <img className={`tech_preview_img`} src={path} alt={title} />
      </div>
    </div>
  );
}
