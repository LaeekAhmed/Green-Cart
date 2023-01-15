export type OptionType = {
    header: string;
    offerings: string[];
    price: number,
    // ? indicates unknown value decided by
    count?: number;
    deliveryDate?: Date;
};

export type CaterorOptions = { [arg: string]: OptionType[] };


