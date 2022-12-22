import {Col} from "react-bootstrap";
//카드 이미지 생성
export const ProjectCard = ({title,description,imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>

                </div>

            </div>
        </Col>
    )
}