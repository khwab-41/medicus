import mongoose, {Schema, Document} from "mongoose";

export interface HospitalInterface extends Document {
    nameOfHospital: string;
    nameOfKeyPerson: string;
    designationOfKeyPerson: string;
    contactNumber: string;
    email: string;
    locationOfHospital: string;
    numberOfBeds: number;
    lookingForSpecialization: string;
    lookingForSuperSpecialization: string;
    approxSalaryOffering: string;
}

const HospitalSchema: Schema<HospitalInterface> = new Schema({
    nameOfHospital: {type: String, required: true},
    nameOfKeyPerson: {type: String, required: true},
    designationOfKeyPerson: {type: String, required: true},
    contactNumber: {type: String, required: true},
    email: {type: String, required: true},
    locationOfHospital: {type: String, required: true},
    numberOfBeds: {type: Number, required: true},
    lookingForSpecialization: {type: String, required: true},
    lookingForSuperSpecialization: {type: String, required: true},
    approxSalaryOffering: {type: String, required: true},
});

const hospitalModel = (mongoose.models.Hospital as mongoose.Model<HospitalInterface>) || mongoose.model<HospitalInterface>('Hospital', HospitalSchema);

export default hospitalModel;