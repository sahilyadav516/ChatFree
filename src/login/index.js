export default function Login()
{
    return (
        <div className="
            h-[250px] w-[350px] flex justify-center items-center
            bg-[#3d3d3d52]
            backdrop-blur-sm
        ">
            <form>
                <label className="text-sm">Username</label><br />
                <input type="text" name="username" required
                className="mb-5 bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                /><br />
                <label className="text-sm">Password</label><br />
                <input type="password" name="password" required
                className="bg-inherit outline-none border-b-[.1px] border-green-700 p-2 focus:border-green-400 focus:bg-[#3d3d3d76]"
                /><br />
                <div className="flex justify-center mt-5">
                    <button type="submit" className="bg-[#27d427] py-1 px-2 text-black">Login</button>
                </div>

            </form>
        </div>
    )
}