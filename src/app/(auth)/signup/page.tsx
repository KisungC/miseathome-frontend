import Textbox from "@/components/common/Textbox/Textbox"
import Select from "@/components/common/Select/Select"

const signup = () => {
    return (
        <>
        <div className="w-dvw h-dvh flex justify-center items-center border-2">
            <div className="max-md: w-lg ">
                <h1>signup</h1>
                <Textbox className="my-1" placeholder="example@example.com" title="Email" />
                <Textbox className="my-1" placeholder="Password" title="Password" type="password" />
                <Textbox className="my-1" placeholder="Password Confirmation" title="Password Confirmation" type="password" />
                <Textbox className="my-1" placeholder="Password Confirmation" title="Username" type="password" />
                <Textbox className="my-1" placeholder="Password Confirmation" title="First Name" type="password" />
                <Textbox className="my-1" placeholder="Password Confirmation" title="Last Name" type="password" />
                <Select title="Cooking Skill">
                    <option selected>Choose a Cooking Skill</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Home Cook">Home Cook</option>
                    <option value="Professional">Professional</option>
                </Select>

            </div>
            </div>
        </>
    )
}

export default signup