import { ProcessSliderComponent, Wrapper } from "./styles";

const ProcessSlider = () => {
    return(
        <>
        <Wrapper>
        <ProcessSliderComponent
        date="März 1998"
        text="Übergabe Schlüssel"
        />
           <ProcessSliderComponent
        date="April 2000"
        text="Vivamus sagittis lacus ante venenatis dapibus posuere velit aliquet."
        />
           <ProcessSliderComponent
        date="Mai 2000"
        text="Posuere erat a ante."
        />
           <ProcessSliderComponent
        date="Juni 2000"
        text="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
        />
           <ProcessSliderComponent
        date="Juli 2000"
        text="Faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
        />
           <ProcessSliderComponent
        date="September 2000"
        text="Vivamus sagittis lacus vel."
        />
        </Wrapper>
        </>
    )
}

export default ProcessSlider