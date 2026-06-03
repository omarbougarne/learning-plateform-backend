@Entity()
export class Submission {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() userId: string;
    @Column() challengeId: string;
    @Column('text') code: string;
    @Column() language: string;

    @Column({
        type: 'enum',
        enum: ['accepted', 'wrong_answer', 'runtime_error', 'time_limit_exceeded'],
    })
    status: string;

    @Column('jsonb') results: TestCaseResult[]; // per test case breakdown
    @CreateDateColumn() createdAt: Date;
}
