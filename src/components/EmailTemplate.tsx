interface EmailTemplateProps  {
    from: string;
    message: string;
};

export const EmailTemplate = ({ from, message } : EmailTemplateProps) => {
  return (
    <div>
      <h3>Email Sent From, Portfolio!</h3>
      <p>Email Sender: {from} </p>
      <p>{message}</p>
    </div>
  );
}
