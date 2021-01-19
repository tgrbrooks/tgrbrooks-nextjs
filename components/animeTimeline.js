import React, { Fragment, Component } from 'react';
import anime from 'animejs';

const PREFIX = '__anime__';

export class AnimeTimeline extends Component {

    constructor(props) {
        super(props);

        // Current Anime DOM Targets
        this.targets = [];
        this.targetRefs = [];
        this.coltargets = [];
        this.notcoltargets = [];
        this.timeline = null;
    }

    componentDidMount() {
        this.createAnime();
    }

    componentDidUpdate() {
        this.createAnime();
    }

    createAnime = () => {
        let props = this.props;
        if (this.targets.length > 0 && this.timeline !== undefined) {
            anime.remove(this.targets);
        }

        this.targets = [];
        for (let [i, ref] of this.targetRefs.entries()) {
            if (ref.current) {
                this.targets.push(ref.current);
                if (props.text_array[i]) {
                    this.coltargets.push(ref.current);
                }
            }
        }

        /*let target = {targets: this.targets};
        let animeProps = Object.assign(props.timeline[0], target);
        delete animeProps.children;
        delete animeProps.svg;*/
        this.timeline = anime.timeline(props.timeline[0]);
        for(let i = 1; i < props.timeline.length; i++){
            let target = {targets: this.targets};
            if (i === 3) {
                target = {targets: this.coltargets};
            }
            let animeProps = Object.assign(props.timeline[i], target);
            this.timeline.add(animeProps);
        }
    };

    // Render children, and their diffs until promise of anime finishes.
    render() {
        let children = this.props.children;
        let refs = this.targetRefs;
        if (!Array.isArray(children)) children = [ children ];
        return (
            <Fragment>
                {children.map((child, i) => {
                    refs.push(React.createRef());
                    let El = this.props.svg ? 'g' : 'div';
                    return (
                        <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
                            {child}
                        </El>
                    );
                })}
            </Fragment>
        );
    }
}

export default AnimeTimeline;
