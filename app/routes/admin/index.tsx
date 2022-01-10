import { Link } from "remix";

export default function AdminIndex() {
    console.log("in the admin index");
    return (
        <p>
            <Link to="new">Create a What is going on? Post</Link>

        </p>
    );
}