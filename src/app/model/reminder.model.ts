export class Reminder {

    reminderId: string;
    reminderName: string;
    reminderDescription: string;
    reminderType: string;
    reminderCreatedBy: string;
    reminderCreationDate: string;

    constructor() {
        this.reminderName = '';
        this.reminderDescription = '';
        this.reminderType = '';
    }
}
