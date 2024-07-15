import ElectricConnectorType from "./ElectricConnectorType";
import ElectricConnectorDirection from "./ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "./ElectricConnectionDisplayMode";
import IOPort from "./IOPort";

export default class ElectricConnection {
    Direction: ElectricConnectorDirection;
    Type: ElectricConnectorType;
    DisplayMode: ElectricConnectionDisplayMode;
    Ports: IOPort[];
    HideFunction: boolean;

    constructor(direction: ElectricConnectorDirection, type: ElectricConnectorType, displayMode: ElectricConnectionDisplayMode, ports: IOPort[], hideFunction: boolean = false) {
        this.Direction = direction;
        this.Type = type;
        this.DisplayMode = displayMode;
        this.Ports = ports;
        this.HideFunction = hideFunction;
    }
}