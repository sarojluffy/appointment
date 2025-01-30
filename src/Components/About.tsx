import imageBody from "../../public/image.jpg"

type Props = {}

const About = (props: Props) => {
    return (
        <div className='w-5/6 mx-auto flex mt-8'>

            <div className="w-2/4">

                <img src={imageBody}></img></div>
            <div className="w-2/4  flex justify-center items-center" >

                <div className="w-3/4 " >
                    <p className="text-sm text-slate-500">

                        Easily book and manage vet appointments for your furry friends. Stay on top of vaccinations, check-ups, and grooming—because your pet’s health matters! 💙


                    </p>


                </div>




            </div>

        </div>
    )
}

export default About