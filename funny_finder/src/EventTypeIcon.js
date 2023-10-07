import * as React from 'react';
import OpenMicIcon from './icons/OpenMicIcon';
import ImprovIcon from './icons/ImprovIcon';
import ComedianIcon from './icons/ComedianIcon';

export default function EventTypeIcon({type}) {
    if (type === "openmic") return <OpenMicIcon/>
    if (type === "improv") return <ImprovIcon/>
    if (type === "comedian") return <ComedianIcon/>
    return null
}

