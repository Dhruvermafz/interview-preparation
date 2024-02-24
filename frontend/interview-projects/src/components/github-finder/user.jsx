export default function User({user}) {
    const {avatar_url, followers, following, public_repos, name, login, created_at} = user

    const createdData = new Date(created_at)

    return (
        <div className="user">
            <div>
                <img src={avatar_url} alt={name} className="avatar" />
            </div>

            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>
                    User joined on{" "}
                    {`${createdData.getDate()} ${createdData.toLocaleDateString("en-us", {
                        month: "short",
                    })} ${createdData.getFullYear()}`}
                </p>
            </div>

            <div className="profile-info">
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>
                </div>

                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{following}</p>
                </div>
            </div>

        </div>
    )
}