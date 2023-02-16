import "./style.scss";
import Section from "../shared/section";
import Blog1 from '../../images/blogs/blog-thumb-1.jpg';
import Blog2 from '../../images/blogs/blog-thumb-2.jpg';
import Blog3 from '../../images/blogs/blog-thumb-3.jpg';
import BlogCard from "./blog-card";


const Blogs = () => {
  return (
    <Section id={"blogs"} title="Blogs & Articles" background={"dark"}>
         <div className="blogs_content__wrapper">
           <BlogCard
           user={"John doe"}
           date="Mar 8 2023"
           image={Blog1}
           title="Quis Auom Vea Eum Iure Regrehedrit"
           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
            />
           <BlogCard
           user={"John doe"}
           date="Mar 8 2023"
           image={Blog2}
           title="Quis Auom Vea Eum Iure Regrehedrit"
           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
            />
           <BlogCard
           user={"John doe"}
           date="Mar 8 2023"
           image={Blog3}
           title="Quis Auom Vea Eum Iure Regrehedrit"
           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
            />
         </div>
        </Section>
  )
}

export default Blogs;