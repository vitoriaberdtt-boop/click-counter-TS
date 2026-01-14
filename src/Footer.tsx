type Props = {
        title: string;
    }


function Footer(props: Props) {

    return (
        <footer>
            {props.title}
        </footer>
    );
}
export default Footer
