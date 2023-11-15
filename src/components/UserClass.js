import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Rahul Thakur",
        location: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rahulamity");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <div className="user-card max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={avatar_url} alt="User avatar" />
            </div>
            <div className="p-8">
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Name: {name}</h2>
              <h3 className="mt-2 text-gray-500">Location: {location}</h3>
              <h4 className="mt-2 text-gray-500">Contact: 9234120001</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserClass;
