import { Stack, StackProps, App } from "aws-cdk-lib";

export interface OutletMonitorStackProps extends StackProps {

}

export default class OutletMonitorStack extends Stack {
    constructor(scope: App, id: string, props: OutletMonitorStackProps) {
        super(scope, id, {
            env: props.env
        });
    }
}