import Image from 'next/image'

function ProjectCard({item}) {
    return (
        <a
            href={item.link}
            target="_blank"
            className="proj_box boxImage max-w-[450px] lg:w-[450px]"
        >
            <h3 className="proj_title">{item.title}</h3>
            <div className="demo">
                <div className="img_box">
                    <Image
                        className="w-full"
                        width={400}
                        height={400}
                        src={item.image}
                        alt="image"
                    />
                </div>
            </div>
        </a>
    )
}

export default ProjectCard