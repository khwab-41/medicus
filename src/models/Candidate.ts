import mongoose, {Schema, Document} from "mongoose";

export interface CandidateInterface extends Document {
    name: string;
    phone: string;
    email: string;
    hometown: string;
    currentLocation: string;
    prefferedState: string;
    pgSpecialization: string;
    ssSpecialization: string;
    spouseSpecialization: string;
    currentSalary: string;
    expectedSalary: string;
    resume: File | null;
}

const CandidateSchema: Schema<CandidateInterface> = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    hometown: {type: String, required: true},
    currentLocation: {type: String, required: true},
    prefferedState: {type: String, required: true},
    pgSpecialization: {type: String, enum: ['Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Hematology', 'Infectious Disease', 'Nephrology', 'Neurology', 'Oncology', 'Pediatrics', 'Pulmonology', 'Rheumatology', 'Urology'], required: true},
    ssSpecialization: {type: String, enum: ['Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Hematology', 'Infectious Disease', 'Nephrology', 'Neurology', 'Oncology', 'Pediatrics', 'Pulmonology', 'Rheumatology', 'Urology'], required: true},
    spouseSpecialization: {type: String, enum: ['Cardiology', 'Dermatology', 'Endocrinology', 'Gastroenterology', 'Hematology', 'Infectious Disease', 'Nephrology', 'Neurology', 'Oncology', 'Pediatrics', 'Pulmonology', 'Rheumatology', 'Urology'], required: true},
    currentSalary: {type: String, required: true},
    expectedSalary: {type: String, required: true},
    resume: {type: File, required: true}
});

const candidateModel = (mongoose.models.Candidate as mongoose.Model<CandidateInterface>) || mongoose.model<CandidateInterface>('Candidate', CandidateSchema);

export default candidateModel;