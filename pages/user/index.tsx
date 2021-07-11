import withAuth from "../../lib/helpers/withAuth";

function UserPage () {
    return <div>
        User data
    </div>
}

export default withAuth(UserPage);