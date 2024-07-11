import ElectricConnectorType from "./ElectricConnectorType";
import ElectricConnectorDirection from "./ElectricConnectorDirection";
import ElectricConnectionDisplayMode from "./ElectricConnectionDisplayMode";
import IOPort from "./IOPort";

export default class ElectricConnection {
    Direction: ElectricConnectorDirection;
    Type: ElectricConnectorType;
    DisplayMode: ElectricConnectionDisplayMode;
    Ports: IOPort[];

    constructor(direction: ElectricConnectorDirection, type: ElectricConnectorType, displayMode: ElectricConnectionDisplayMode, ports: IOPort[]) {
        this.Direction = direction;
        this.Type = type;
        this.DisplayMode = displayMode;
        this.Ports = ports;
    }
}