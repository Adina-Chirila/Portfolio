import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";

export const ContactSection = styled.div`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.darkBlue};
`;

export const ContactContainer = styled(Container)`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    display: flex;
    flex-direction: column;

    .row {
        max-width: 720px;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;

        label {
            margin-bottom: 0.5em;
            font-size: 14px;
        }

        textarea {
            resize: none;
        }

        input,
        textarea {
            background-color: ${colors.deepDarkBlue};
            border: none;
            border-left: 3px solid ${colors.primaryPink};
            color: ${colors.white};
            padding: 1em 0.5em;
            border-radius: 5px;

            /* font-family: inherit; */

            &:focus {
                outline: none;
            }
        }
    }
`;

// export const Form = styled(Container)`

//     .row {
//         border: 1px solid red;
//     }
// `;
